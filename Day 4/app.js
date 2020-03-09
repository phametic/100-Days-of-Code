(function() {
let inputValue = document.getElementById("userText").value;

  document.getElementById("btn").addEventListener("click", function(){
    inputValue = document.getElementById("userText").value;
    document.getElementById("displayText").innerHTML = inputValue;

    if(inputValue == "")
    document.getElementById("displayText").innerHTML = "N/A";
  });
  
})();

