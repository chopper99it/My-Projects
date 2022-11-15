let images = document.querySelectorAll(".slide");
let arrowLeft = document.querySelector("#arrow-left");
let arrowRight = document.querySelector("#arrow-right");
let index = 0;
// console.log(images);

//Reset
function reset() {
  // images.forEach(function (item) {
  //   item.style.display = "none";
  // });

  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
}

//start
function startSlide() {
  reset();
  images[0].style.display = "block";
}

//show Right Image
function showRightImage() {
  reset();
  images[index++].style.display = "block";
}

// show Left Image
function showLeftImage() {
  reset();
  images[--index].style.display = "block";
}

//event
arrowRight.addEventListener("click", clickRight);
arrowLeft.addEventListener("click", clickLeft);

//Run Click Right
function clickRight() {
  if (index === images.length) {
    index = 0;
  }
  showRightImage();
}

//Run Click Left
function clickLeft() {
  if (index === 0) {
    index = images.length;
  }
  showLeftImage();
}
startSlide();
// reset();
