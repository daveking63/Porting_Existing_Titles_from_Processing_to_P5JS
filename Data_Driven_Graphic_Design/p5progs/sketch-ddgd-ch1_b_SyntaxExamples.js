// Source: Data-Driven Graphic Design: Creative Coding for Visual Communication
// Artist: Andrew Richardson
// SourceType: Book and Code at https://www.bloomsbury.com/cw/data-driven-graphic-design/resources/chapter-1-designers-code/
// Date: 2016
// Description: Code Section at ch1_b Syntax Examples in book

// Comments
// Using the double forward slash sign creates comments which allows you to add 'notes' to the code.
// Many of the code examples in the book will include comments alongside the code to help explain it.

/* 
 several lines of comments can be created
 using the forward slash and asterisk together
*/

//-------------------------------------------------------

// SEMI-COLON (;) 
// All lines of code end with a semi-colon (;)  
// A missed semi-colour will result in an error. 

//-------------------------------------------------------

// CURLY BRACKETS ({}): 
//These indicate a “block” of code, similar to a paragraph. 
// basic 'blocks' of code are 'set up' and 'draw'.

function setup ( ) { 
	// not part of original code - simply for displaying reminder
	createCanvas(400, 300);
	background(225); 
	textSize(15); 
	text("Syntax Examples: See Console for Output", 30, 150);
	
	// code within these curly brackets are treated as a 'block'
	// things within 'setup' happen once - when the code is first run.
	console.log("this is setup"); // note the ; at the end
}

function draw ( ) { 
	// code within these curly brackets are treated as a 'block'
	// things within 'draw' happen continually whilst the code is running.
	console.log("this is draw");
}

//--------------------------------------------------------//
//
function keyTyped(){
  if (key == 's' || key == 'S') save('img-ddgd-sketch-ch1_b_SyntaxExamples.jpg')
}
