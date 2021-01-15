console.log("js_start");

for (i = 1, j = 1; i <=6, j <= 6; i++,j++){
  let change = document.querySelector(".view");
  let link = document.querySelector(".show a");
  console.log("link");
  change.addEventListener("mouseover", function () {
    console.log("event");
    change.replaceWith(link);
    link.classList.add("active");
  });
  }


// let project_1 = document.querySelector(".item_1")
// let change = document.querySelector(".view");
// let link = document.querySelector(".show a");
// console.log("link");
// change.addEventListener("mouseover", function () {
//   console.log("event");
//   change.replaceWith(link);
//   link.classList.add("active");
// });
