(function () {
  let customerImg = document.getElementById("customer-img");
  let customerName = document.getElementById("customer-name");
  let customerText = document.getElementById("customer-text");

  function Customer(img, name, text) {
    this.cusImg = img;
    this.cusName = name;
    this.cusText = text;
  }

  let customers = [
    customerOne = new Customer("img/customer-1.jpg", "SANDY", "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock"), 
    customerTwo = new Customer("img/customer-2.jpg", "AMY", "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."),
    customerThree = new Customer("img/customer-3.jpg", "TYRELL", "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."),
    customerFour = new Customer("img/customer-4.jpg", "WANDA", "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")
  ];

let buttons = document.querySelectorAll("a");
let counter = 0;

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if(button.className == "prevBtn") {
      console.log("prevBtn");
    }
    switch(button.className) {
      case "btn prevBtn":
        counter--;
        if(counter < 0) {
          counter = customers.length - 1;
        }
        changeCustomerProfile(counter);
        console.log(counter);
        break;    
      case "btn nextBtn":
        counter++;
        if(counter > customers.length - 1){
          counter = 0;
        }
        changeCustomerProfile(counter);
        console.log(counter);
        break;
        default:
          console.log("No clicked button");
      }
  });
});

function changeCustomerProfile(customerNum) {
  console.log("img change");
    customerImg.src = customers[customerNum].cusImg;
    customerName.textContent = customers[customerNum].cusName;
    customerText.textContent = customers[customerNum].cusText;
  
}
})();




