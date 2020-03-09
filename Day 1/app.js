let body = document.getElementById("body");
document.getElementById("btnColour").addEventListener("click", function(){
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  body.style.backgroundColor = randomColour(r,g,b);
});

function randomColour(r, g, b) {
  return "rgb("+r+", "+g+", "+b+")";
}