let body = document.getElementById("body");
document.getElementById("btnColour").addEventListener("click", function(){
  body.style.backgroundColor = generateHexColour();
  console.log(generateHexColour());
});

function randomColour(r, g, b) {
  return "rgb("+r+", "+g+", "+b+")";
}

function generateHexColour() {
  let hexValues = "0123456789abcdef";
  let hexColor = "#";
  
  for (let i = 0; i < 6; i++) {
    hexColor += hexValues[Math.floor(Math.random() * 16)];
  }
  return hexColor;
}