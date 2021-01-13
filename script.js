console.log("js_start");
let change = document.querySelector(".view");
let show_link = document.querySelector(".show");
console.log("change");
console.log("show_link");

change.addEventListener("mouseover", function (event) {
  event.preventDefault();
  console.log("event");
  show_link.classList.toggle("active");
});