document.addEventListener("mousemove", myLocation);
document.addEventListener("scroll", myScroll);

let cx = document.querySelectorAll("span");

console.log(cx);

function myLocation(event) {

	// read properties from the implicitly passed event object

	cx[0].textContent = event.clientX;
	cx[1].textContent = event.clientY;

	cx[2].textContent = event.pageX;
	
	// so pageY is dynamic when we scroll
	myPageY = event.pageY;
	progress = window.pageYOffset;

	cx[3].textContent = myPageY;


	cx[4].textContent = event.screenX;
	cx[5].textContent = event.screenY;


}


// highlight


let myPageY = 0;
let progress = 0;


function myScroll(event){

	if(!mySwitch) {
		if(window.scrollY > 300){
			mySwitch = true;
			highlight();
		}
	}
	else {
		if(window.scrollY < 300){
			mySwitch = false;
			unHighlight();
		}
	}

	cx[3].textContent = myPageY + (window.pageYOffset - progress);
}

let mySwitch = false;
let pickOut = document.querySelector("#pick-out");

function highlight() {
	pickOut.style.fontWeight = 700;
}

function unHighlight(){ 
	pickOut.style.fontWeight = 400;
}







