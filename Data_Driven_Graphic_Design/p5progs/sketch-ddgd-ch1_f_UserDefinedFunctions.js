// Source: Data-Driven Graphic Design: Creative Coding for Visual Communication
// Artist: Andrew Richardson
// SourceType: Book and Code at https://www.bloomsbury.com/cw/data-driven-graphic-design/resources/chapter-1-designers-code/
// Date: 2016
// Description: Code Section at ch1_f User Defined Functions in book
 
// Some functions are built into Processing: e.g. setup( ) and draw( )
// the setup() function is run once, when the programme starts:

function setup ( ) { 
	
	// not part of original code - simply for displaying reminder
	createCanvas(400, 300);
	background(225); 
	textSize(15); 
	text("User Defined Functions: See Console for Output", 25, 150);

	// user-defined functions can be created and then called within the code: 
	// 'printMessage' and 'calcSum' are user defined functions created in this script. 
	// once created they can be called and used within the code:

	printMessage ("this is a test");
  
	// call the custom function 'calcSum':
	calcSum (10, 2); // outputs 20
	calcSum (5, 30); // outputs 150

} 

// the draw() function continually executes lines of code.
function draw ( ) {
} 


// These are the user-defined functions: 
// this function outputs a simple string 
function printMessage (message) { 
	console.log(message);
}

// this function outputs the sum of 2 numbers
function calcSum (num1, num2) {
	  var number1 = num1;
	  var number2 = num2;
	  console.log(number1 * number2);
}
//
function keyTyped(){
  if (key == 's' || key == 'S') save('img-ddgd-sketch-ch1_f_UserDefinedFunctions.jpg')
}
