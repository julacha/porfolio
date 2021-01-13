let change = document.querySelector(".project");
let show_link = document.querySelector(".show");


change.addEventListener("click", function (event) {
  event.preventDefault();
  show_link.classList.toggle("show_link");
});