console.log("js_start");

// for (let i = 1, i <=6; i++){
  // let change = document.querySelector(".view");
  // let link = document.querySelector(".show a");
  // console.log("link");
  // //let move = 0;
  // change.addEventListener("mouseover", function () {
  //   console.log("event");
  //   change.replaceWith(link);
  //   link.classList.add("active");
  // });
  // link.addEventListener("mouseout", function () {
  //   console.log("event");
  // //if(link.classList.contains("active")){
  //   link.replaceWith(change);
  // // } else{
  // //   link.classList.add("active");
  // // }
  // });

// let project_1 = document.querySelector(".item_1")
// let change = document.querySelector(".view");
// let link = document.querySelector(".show a");
// console.log("link");
// change.addEventListener("mouseover", function () {
//   console.log("event");
//   change.replaceWith(link);
//   link.classList.add("active");
// });



var wrapper = document.querySelector(".skills");
var text = document.querySelector(".text");

var textCont = text.textContent;
text.style.display = "none";

for (var i = 0; i < textCont.length; i++) {
  (function(i) {
    setTimeout(function() {
      var texts = document.createTextNode(textCont[i])
      var span = document.createElement('span');
      span.appendChild(texts);

      span.classList.add("wave");
      wrapper.appendChild(span);

    }, 75 * i);
  }(i));
}

function printText( el ){

	let letterTimeout = 100

	let heading = el.innerHTML
	let i = 1

	let print = function(){

			if( i <= heading.length ){
				el.innerHTML = heading.substr( 0, i );
				setTimeout( arguments.callee, letterTimeout );
			}

			i++;
		}

	print() 
};

let el = document.getElementById( 'type' )
printText( el );