/*

	The DOM is like a TREE of node objects.

	These objects automatically include the following properties:

		.childNodes (returns a NodeList with all the children of the node)
		.firstChild
		.lastChild
		.previousSibling (up the dom)
		.nextSibling (down the dom)
		.parentNode (returns node's parent node)

	Recursive functions are useful due to this structure.

	But trying to navigate the DOM to a particular element with something like this...

	document.body.firstChild.firstChild.nextSibling.lastChild

	... may be a bad idea. It bakes in assumptions about the structure of the DOM.

	Instead we find and select elements with three different types of selectors.

*/

/*
	3 SELECTORS:


	1) .getElementsByTagName() 

 		- returns an 'array-like object' of all the elements within a
 		  given tag name that are descendents (direct or indirect children) of the node it is
 		  called on, here document.body
 		- under, we immeadiately call on the first element in the list (nonsensical in context)
*/


let myText = document.body.getElementsByTagName("div")[0];

function changeText() {
	myText.innerText = "I've changed";  // innerText changes text in tag, or use textContent
	document.querySelector("button").disabled = true;
}

function changeColor() {
	myText.style.color != "skyblue" ? myText.style.color = "skyblue" : myText.style.color = "black";
}

/*
	^ div {
		style: {
			color: ____,
		},

		...
	}

	^ the style attribute, an object within the object
*/


/*
	2) .getElementById()

		- returns a single element found by ID
*/


let photo = document.getElementById("image");

/* 
	3) .getElementsByClassName() 


	OR,

	We could just replace everyting with 

	querySelectorAll() and querySelector()

	The difference, though, is that the object returned by querySelectorAll() is not live.
	It won't change when you change the doc, which may be better.

	You would still need to call Array.from() if you want to treat it like a real array, though.
*/ 


// -------------------------------------------


/*
	VARIOUS ATTRIBUTES OF AND METHODS ON NODE OBJECTS FOR MANIPULATION:

	after innerText, or textContent,

	A) .innerHTML = "____"

 	- consequence: removes all the descendent elements of the element it's called on and replaces them
    with nodes constructed by parsing the HTML given in the string.

*/


function replaceImage() {
	let imageWrapper = document.getElementById("book");
	imageWrapper.innerHTML = "<div> replacement text </div>";
	document.querySelector("#replace").disabled = true;
}


/* 
 	B) .replaceChild( __ , __ )

 	- replace a specific child with some specific other element
 	- here's an alt version of replaceImage(): 

		function replaceImage() {
			let image = document.getElementById("image");
			let text = document.createTextNode("replacement text");
			image.parentNode.replaceChild(text,image);
		}
*/


/*

	C) .insertBefore( _ , _ )
		- for inserting one node before another, i.e. adding a child to anywhere
		  in a sequence of children

	D) .appendChild()
		- for adding a child to the end of a sequence of children

*/


let outerDiv = document.getElementById("pshift");

function sendLastUp() {
	let paras = document.body.getElementsByTagName("p");
	outerDiv.insertBefore(paras[paras.length-1], paras[0]);
}

function addFour() { 
	let newP = document.createElement("p");
	newP.innerText = "4";
	outerDiv.appendChild(newP);

	let b = document.querySelector("#a4");
	b.remove();                            // <---------- removes the element its called on
}

/* 

	document.createElement()

	^ creates an element, which you can then insert into the DOM

*/ 















