// Source: Data-Driven Graphic Design: Creative Coding for Visual Communication
// Artist: Andrew Richardson
// SourceType: Book and Code at https://www.bloomsbury.com/cw/data-driven-graphic-design/resources/chapter-2-drawing-with-numbers/
// Date: 2016
// Description: Code Section at ch2_d For Loops in book

// For Loops 
// a for loop is used to repeat the drawing of a line.

function setup(){
	createCanvas (300, 300); 
	background (255);

	// in this example each loop repeats the line () command 60 times. 
	// the value of i is used to set the x location of each line
	// 60 lines are drawn using only a few lines of code.
	for (var i=0; i<60; i++) { 
		line (i*10, 20, i*10, 100);
	} 

	// the strokeweight of each line is increased with the value 'i' 
	// the lower point in the line is spaced 15 pixels apart - creating an offset
	for (i=0; i<60; i++) { 
		strokeWeight (i/10);
		line (i*10, 120, i*15, 200);
	}
}
//
function keyTyped(){
  if (key == 's' || key == 'S') save('img-ddgd-sketch-ch2_d_ForLoops.jpg')
}
