const btn = document.getElementById("btn");
const dog = document.getElementById("dog");
const img = document.getElementById("img");
function displayDogs() {
  fetch("https://dog.ceo/api/breeds/image/random").then(function (res) {
    res.json().then(function (item) {
      img.src = item.message;
      dog.appendChild(img);
      console.log(item.message);
    });
  });
}
btn.addEventListener("click", function () {
  displayDogs();
});
window.addEventListener("DOMContentLoaded", function () {
  displayDogs();
});
