console.log("js_start");
// let changes = document.querySelectorAll(".view");
// let links = document.querySelectorAll(".show");

let proj = document.querySelector(".item_1");
let change = document.querySelector(".view");
let link = document.querySelector(".show a");
console.log("link");
change.addEventListener("click", function () {

  console.log("event");
  change.replaceWith(link);
  link.classList.add("active");
  // if(!change.classList.contains("new")){
  //   change.classList.add("new")&&
  //   link.classList.add("active")
  // }else{
  //   change.classList.remove("new")&&
  //   link.classList.remove("active")
  // }

  // if(!link.classList.contains("active")){
  //   link.classList.add("active")
  // }else{
  //   link.classList.remove("active")
  // }
});





