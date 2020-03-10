let images = [
  "assets/image-01.jpg",
  "assets/image-02.jpg",
  "assets/image-03.jpg",
  "assets/image-04.jpg"
];
let imageCounter = 0;
let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    switch(button.className) {
      case "rightBtn":
        imageCounter++;
        if(imageCounter > images.length - 1) {
          imageCounter = 0;
        }
        changeImage(imageCounter);
        console.log("Right Button " + imageCounter);
        break;
      case "leftBtn":
        imageCounter--;
        if(imageCounter < 0) {
          imageCounter = images.length - 1;
        }
        changeImage(imageCounter);
        console.log("Left Button " + imageCounter);
        break;
    }
  }); 
});

let image = document.getElementById("image");
function changeImage(imageNumber) {
    image.src = images[imageNumber];
}