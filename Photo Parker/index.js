let current = document.querySelector(".current");
let images = document.querySelectorAll(".images img");

//Lấy img
images.forEach(function (item) {
  item.addEventListener("click", showImg);
});

//Show Img on Current
function showImg(e) {
  current.src = e.target.src;
  for (let i = 0; i < images.length; i++) {
    images[i].style.opacity = 1;
  }
  e.target.style.opacity = 0.5;
}
showImg();
