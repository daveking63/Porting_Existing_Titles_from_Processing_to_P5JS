// Source: Data-Driven Graphic Design: Creative Coding for Visual Communication
// Artist: Andrew Richardson
// SourceType: Book and Code at https://www.bloomsbury.com/cw/data-driven-graphic-design/resources/chapter-1-designers-code/
// Date: 2016
// Description: Code Section at ch1_e For Loops in book


// FOR LOOPS. 
// a for loop repeats line(s) of code a set number of times

// the following is an example of a for loop which loops 10 times. 
// the variable 'i' is used to count the loop
// i starts at 0 (i=0)
// the loop is repeated whilst i is less than 10 (i<10) 
// after each loop i is increased by 1 (i++) 
// note: the 'i' is declared as a var within the for statement

function setup(){
	
	// not part of original code - simply for displaying reminder
	createCanvas(400, 300);
	background(225); 
	textSize(15); 
	text("For Loops: See Console for Output", 35, 150);
	
	for (var i=0; i<10; i++) {
		console.log(i); 
	}
	// outputs the value of 'i' during each loop 
	// the result is an output of  "0 1 2 3 4 5 6 7 8 9"
}
//
function keyTyped(){
  if (key == 's' || key == 'S') save('img-ddgd-sketch-ch1_e_ForLoops.jpg')
}
