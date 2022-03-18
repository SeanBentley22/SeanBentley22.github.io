/* ----------------- SVG ------------------- */

// grab references to our elements
let rectangle = document.querySelector("#grab");
let pulley = document.querySelector("path");
let button = document.querySelector("#switch");

// variables
let reverse = false;
let farDown = 15;
let stopCode;


function move() {

	// animate
	pulley.setAttribute("d",`M 125 10 V ${farDown}`);
    rectangle.setAttribute("y", farDown);
    rectangle.setAttribute("fill",`rgb(${farDown},0,${255-farDown})`);

    // which way are we going?
    !reverse ? farDown += 5 : farDown--;

    // switch directions
    if(farDown == 255 || farDown == 15){
        reverse = !reverse;
    }
        
    stopCode = requestAnimationFrame(move); // recursive call
}


// stop & start
button.addEventListener("click", ()=> {
	if(stopCode){
		cancelAnimationFrame(stopCode);
		button.textContent = "Animate";
		stopCode = null;
	}
	else{
		button.textContent = "Stop";
		move();  // <----------------------- function call
	}
});


/* --------------- CANVAS ------------------ */

// grab references to our elements
let canvas = document.querySelector("canvas")
let cx = canvas.getContext("2d");
let button2 = document.querySelector("#switch2");

//initial shape (was unnecessary with SVG, as we pre-defined it in our HTML)
cx.beginPath();
cx.arc(125,125,10,0,2*Math.PI);
cx.fillStyle = "purple";
cx.fill();

// variables
let r = 10;
let reverse2 = false;
let stopCode2;

function expand(){

  	cx.clearRect(0,0,250,250);
  	cx.beginPath();
  	cx.arc(125,125,r,0,2*Math.PI);
  	cx.fillStyle = "purple";
  	cx.fill();

  	!reverse2 ? r += 1 : r-= 1;
      
     if(r== 100|| r == 10){
        reverse2 = !reverse2;
     }
       
     stopCode2 = requestAnimationFrame(expand); // recursive call
}

// stop & start
button2.addEventListener("click", ()=> {
	if(stopCode2){
		cancelAnimationFrame(stopCode2);
		button2.textContent = "Animate";
		stopCode2 = null;
	}
	else{
		button2.textContent = "Stop";
		expand(); // <----------------------- function call
	}
});

