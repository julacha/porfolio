//console.log("js_start");
let changes = document.querySelectorAll(".view");
let links = document.querySelectorAll(".show a");

// for (let change of changes) for(let link of links){
// change.addEventListener("mouseover", function () {
//   document.getElementById(change).style.opacity = opacity/100;
//   document.getElementById(change).style.filter = 'alpha(opacity='+ opacity +')';
//   change.replaceWith(link);
//   document.getElementById(link).style.opacity = (100-opacity)/100;
//   document.getElementById(link).style.filter = 'alpha(opacity='+ (100-opacity) +')';
//   this.link.classList.add("active");
// });
// link.addEventListener("mouseout", function () {
//   console.log("event");
//   link.replaceWith(change);
// });
// }
//https://stackoverflow.com/questions/29017379/how-to-make-fadeout-effect-with-pure-javascript
let project_1 = document.querySelector(".item_1");
let change = document.querySelector(".view");
let link = document.querySelector(".show a");
project_1.querySelector(".view").addEventListener("mouseover", function () {
  console.log("event");
  change.replaceWith(link);
  link.classList.add("active");
  link.classList.add("fadein");
});
project_1.querySelector(".show a").addEventListener("mouseout", function () {
  console.log("event");
  link.replaceWith(change);
  change.classList.add("fadeout");
});

//-----------------------------------------------
let project_2 = document.querySelector(".item_2")
let change_2 = document.querySelector(".view_2");
let link_2 = document.querySelector(".show_2 a");
project_2.querySelector(".view_2").addEventListener("mouseover", function () {
  console.log("event");
  change_2.replaceWith(link_2);
  link_2.classList.add("active_2");
});
project_2.querySelector(".show_2 a").addEventListener("mouseout", function () {
  console.log("event");
  link_2.replaceWith(change_2);
});

let project_3 = document.querySelector(".item_3")
let change_3 = document.querySelector(".view_3");
let link_3 = document.querySelector(".show_3 a");
project_3.querySelector(".view_3").addEventListener("mouseover", function () {
  console.log("event");
  change_3.replaceWith(link_3);
  link_3.classList.add("active_3");
});
project_3.querySelector(".show_3 a").addEventListener("mouseout", function () {
  console.log("event");
  link_3.replaceWith(change_3);
});

let project_4 = document.querySelector(".item_4")
let change_4 = document.querySelector(".view_4");
let link_4 = document.querySelector(".show_4 a");
project_4.querySelector(".view_4").addEventListener("mouseover", function () {
  console.log("event");
  change_4.replaceWith(link_4);
  link_4.classList.add("active_4");
});
project_4.querySelector(".show_4 a").addEventListener("mouseout", function () {
  console.log("event");
  link_4.replaceWith(change_4);
});

// --------------------------------

var wrapper = document.querySelector(".skills");
var prog = document.querySelector(".text");

var textCont = prog.textContent;
prog.style.display = "none";

for (let i = 0; i < textCont.length; i++) {
  (function(i) {
    setTimeout(function() {
      let texts = document.createTextNode(textCont[i])
      let span = document.createElement('span');
      span.appendChild(texts);

      span.classList.add("wave");
      wrapper.appendChild(span);

    }, 75 * i);
  }(i));
}
//--------------------------------
let els = document.querySelectorAll('#type');
for (let el of els){
function printText( el ){

	let letterTimeout = 100

	let heading = el.innerHTML
	let i = 1

	let print = function(){

			if( i <= heading.length ){
				el.innerHTML = heading.substring( 0, i );
				setTimeout( arguments.callee, letterTimeout );
			}

			i++;
		}

	print() 
};

printText( el );
}