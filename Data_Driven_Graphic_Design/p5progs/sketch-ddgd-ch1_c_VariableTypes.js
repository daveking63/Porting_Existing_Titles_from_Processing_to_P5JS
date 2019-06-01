// Source: Data-Driven Graphic Design: Creative Coding for Visual Communication
// Artist: Andrew Richardson
// SourceType: Book and Code at https://www.bloomsbury.com/cw/data-driven-graphic-design/resources/chapter-1-designers-code/
// Date: 2016
// Description: Code Section at ch1_c Variable Types in book


// Creating Variables
// Variables are used to name and store pieces of data.
// Variables are declared with the keyword 'var' followed
// by the name and optionally the value of the variable
// Unlike 'processing' the type is not declared in p5.js

function setup(){
	
	// not part of original code - simply for displaying reminder
	createCanvas(400, 300);
	background(225); 
	textSize(15); 
	text("Variable Types Functions: See Console for Output", 25, 150);

	// create a variable called myVar with a starting value of 100.
	var myVar = 100; 

	// once created the value of myVar can be found, or changed. 
	console.log('myVar ' + myVar);  // outputs 100
	myVar = myVar + 10; // add 10 to the variable
	console.log ('myVar ' + myVar);  // outputs 110

	//------------------------------------
	// Other Examples: 
	// 'whole numbers or integers
	var score = 30;             

	// 'floats' or decimal numbers
	var x_pos = 120.5;     

	// strings used to store text characters.
	var userName = "Harry";  

	//------------------------------------
	// Once created, the value of the variable can be used and/or changed. 
	var name = "Andrew";       // creates a new variable ('name')
	console.log('name ' + name);               // output 'Andrew'
	name = "Bill";                // change the variable value
	console.log('name ' + name);               // output "Bill"

	//------------------------------------
	// number variables can be easily manipulated using simple mathematical functions (+ * - /) 
	var num = 100; 
	console.log('num= ' + num); 
	num = num + 20; // add 20
	console.log('num+20= ' + num); 
	num = num / 2; // divide 2. 
	console.log('num/2= ' + num); 
	num = num * 4; // multiply by 4; 
	console.log('num*4= ' + num); 
	num = num - 120; // minus 120
	console.log('num-120= ' + num); 
}
//
function keyTyped(){
  if (key == 's' || key == 'S') save('img-ddgd-sketch-ch1_c_VariableTypes.jpg')
}
