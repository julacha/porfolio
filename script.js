let change = document.querySelector(".size");
let show_link =document.querySelector(".item_1");


show_link.addEventListener("click", function () { 
  if (change.classList.contains("active")) {
    change.classList.remove("active");
  } else {
    change.classList.add("active");
  }
});