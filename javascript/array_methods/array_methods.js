
// grab all circle SVG elements
let circles = document.querySelectorAll("circle");


/* ----------------- map() ------------------- */


// grab references for elements
let button = document.querySelector("#switch");
let radii = [circles[0].getAttribute("r"),circles[1].getAttribute("r"),circles[2].getAttribute("r")];

let mappedRadii;

// call
button.addEventListener("click", () => {
	mappedRadii = radii.map( radius => radius / 2 ); // <----------- map()
	animateMap();
	button.disabled = true;
});

//animate
function animateMap() {

	for(let i = 0; i < 3; i++){

		if(circles[i].getAttribute("r") != mappedRadii[i]){
			circles[i].setAttribute("r", circles[i].getAttribute("r") - 1 );
		}
	}

	if(circles[2].getAttribute("r") != mappedRadii[2]){
		requestAnimationFrame(animateMap);
	}
}



/* ----------------- filter() ------------------- */


// grab references for elements
let button2 = document.querySelector("#switch2");
let radii2 = [circles[3].getAttribute("r"),circles[4].getAttribute("r"),circles[5].getAttribute("r")];

let filteredRadii;

// call
button2.addEventListener("click", () => {
	filteredRadii = radii2.filter( radius => radius > 30 ); // <----------- filter()
	animateFilter();
	button2.disabled = true;
});

//animate
function animateFilter() {

	for(let i = 3; i < 6; i++){

		if(!filteredRadii.includes(circles[i].getAttribute("r"))){
			circles[i].setAttribute("r", circles[i].getAttribute("r") - 1 );
		}

	}

	if(circles[3].getAttribute("r") != 0){
		requestAnimationFrame(animateFilter);
	}
}


/* ------------------ reduce() ------------------ */


// grab references for elements
let button3 = document.querySelector("#switch3");
let radii3 = [Number(circles[6].getAttribute("r")),Number(circles[7].getAttribute("r")),Number(circles[8].getAttribute("r"))];
let reduction;

// call
button3.addEventListener("click", () => {
	reduction = radii3.reduce( (combined, nextRadii) => combined + nextRadii ); // <----------- reduce()
	animateReduce();
	button3.disabled = true;
});

//animate

let j = 7;

function animateReduce() {

	if(circles[j].getAttribute("cx") != circles[6].getAttribute("cx")){

		circles[j].setAttribute("cx", circles[j].getAttribute("cx") - 5 );

		if(circles[j].getAttribute("r") > 2){

			circles[j].setAttribute("r", circles[j].getAttribute("r") - 2 );
		}
	}
	else {
		j++;
	}

	if(Number(circles[6].getAttribute("r")) < (reduction)){
		circles[6].setAttribute("r", Number(circles[6].getAttribute("r")) + 2);
	}

	if(j < 9 ){
		requestAnimationFrame(animateReduce);
	}
}


/* Note: While a lot of this code is trivial, contrived, and unneccesarily expensive it is set up for the purposes of
visualization. It still makes use of all 3 functions for the purposes of integrity */ 
