console.log("js_start");

// for (let i = 1, i <=6; i++){
  let change = document.querySelector(".view");
  let link = document.querySelector(".show a");
  console.log("link");
  //let move = 0;
  change.addEventListener("mouseover", function () {
    console.log("event");
    change.replaceWith(link);
    link.classList.add("active");
  });
  link.addEventListener("mouseout", function () {
    console.log("event");
  //if(link.classList.contains("active")){
    link.replaceWith(change);
  // } else{
  //   link.classList.add("active");
  // }
  });

// let project_1 = document.querySelector(".item_1")
// let change = document.querySelector(".view");
// let link = document.querySelector(".show a");
// console.log("link");
// change.addEventListener("mouseover", function () {
//   console.log("event");
//   change.replaceWith(link);
//   link.classList.add("active");
// });
