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