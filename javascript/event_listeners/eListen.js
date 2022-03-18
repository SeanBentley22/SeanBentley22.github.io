/*
	Importantly, event handlers are registered within a context, and are called only when the
	event happens in the context of the object they are registered on. 

	Unlike with inline onclick="___" attribute, you can safely add any number of event listeners
	to any element.
*/


	let bMaker = document.querySelector("#blue");
	let pMaker = document.querySelector("#pink");
	let myText = document.querySelector("#colour");

	// main funcs

	function pink() {

		myText.style.backgroundColor = "pink";

		pMaker.removeEventListener("click", pink);
		bMaker.addEventListener("click", blue);

		pDeOpaque();

		pMaker.removeEventListener("mouseover", pOpaque);
		pMaker.removeEventListener("mouseout", pDeOpaque);

		bMaker.addEventListener("mouseover", bOpaque);
		bMaker.addEventListener("mouseout", bDeOpaque);

	}

	function blue(){

		myText.style.backgroundColor = "skyblue";

		bMaker.removeEventListener("click", blue);

		bDeOpaque();

		bMaker.removeEventListener("mouseover", bOpaque);
		bMaker.removeEventListener("mouseout", bDeOpaque);

	}

	// opaque-a-fiers

	function pOpaque() {
		pMaker.style.opacity = "0.2";
	}

	function pDeOpaque(){
		pMaker.style.opacity = "1";
	}

	function bOpaque() {
		bMaker.style.opacity = "0.2";
	}

	function bDeOpaque(){
		bMaker.style.opacity = "1";
	}

	// start blocks

	pMaker.addEventListener("mouseover", pOpaque);
	pMaker.addEventListener("mouseout", pDeOpaque);

	pMaker.addEventListener("click", pink);



















