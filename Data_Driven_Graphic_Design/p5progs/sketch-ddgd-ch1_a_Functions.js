// Source: Data-Driven Graphic Design: Creative Coding for Visual Communication
// Artist: Andrew Richardson
// SourceType: Book and Code at https://www.bloomsbury.com/cw/data-driven-graphic-design/resources/chapter-1-designers-code/
// Date: 2016
// Description: Code Section at ch1_a Functions in book

// p5.js has its own set of functions: 
// A full list of P5.js functions can be found at https://p5js.org/reference/

function setup(){
	
	// All functions end with parenthesis ( ) and a semi colon ;
	smooth ();// smooth the graphics on screen.

	// Many functions require extra information (called arguments) to specify how the function works. 
	// Arguments can be number values:
	strokeWeight(10); // set the stroke to 10 pixels wide
	strokeWeight(5); // set the stroke to 5 pixels wide

	// Arguments can be other types of data, such as text:
	console.log("hello");

	// Some functions need more than one argument.
	// Extra arguments are separated using a comma:
	createCanvas(400, 200); // set the width and height of the display window

	// Arguments of different data types can be used together. 
	// For example, the function for writing text on the screen needs to know what text to display
	// and the x, y position on the screen :
	background(225);
	textSize(20);
	text("hello", 190, 100);   // display text at x:10, y:20
}
//
function keyTyped(){
  if (key == 's' || key == 'S') save('img-ddgd-sketch-ch1_a_Functions.jpg')
}
