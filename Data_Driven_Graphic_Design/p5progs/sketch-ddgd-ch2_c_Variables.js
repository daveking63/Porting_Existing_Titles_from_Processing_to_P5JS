// Source: Data-Driven Graphic Design: Creative Coding for Visual Communication
// Artist: Andrew Richardson
// SourceType: Book and Code at https://www.bloomsbury.com/cw/data-driven-graphic-design/resources/chapter-2-drawing-with-numbers/
// Date: 2016
// Description: Code Section at ch2_c Variables in book

// Variables
// Variables can be used to change or move graphics

// This example uses one changing variable to continually 
// move a shape across the screen.

// create a variable to hold the x value of a shape. 
// this will be a value that continually changes.
var xpos = 10;

function setup ( ) { 
	createCanvas(300, 300);
}

// the draw() function is continually repeated:
function draw() { 
	// draw a background to the scene
	background (90);

	// draw a circle using the value xpos to position it on the x axis
	ellipse (xpos, 50, 10, 10); 
	// increase xpos by 2 (moves the shape)
	xpos = xpos + 2; 

	// if the xpos is greater than the width of the screen 
	// then reset it back to 0. 
	if (xpos > 320) { 
		xpos = 0; 
	}

	// another circle is draw at the position of the mouse 
	// using mouseX and mouseY as its x and y values. 
	ellipse (mouseX, mouseY, 40, 40);
}
//
function keyTyped(){
  if (key == 's' || key == 'S') save('img-ddgd-sketch-ch2_c_Variables.jpg')
}
