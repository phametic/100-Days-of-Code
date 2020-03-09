let buttons = document.querySelectorAll(".btn");
let counterText = document.getElementById("counter");
let counter = 0;

buttons.forEach(button => button.addEventListener("click", function(){
  counter += parseInt(this.value);
  counterText.innerHTML = counter;
  if(counter == 0) {
    counterText.style.color = "white";
  } else if(counter < 0) {
    counterText.style.color = "red";
  } else {
    counterText.style.color = "green";
  }
}));

