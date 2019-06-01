// Source: Data-Driven Graphic Design: Creative Coding for Visual Communication
// Artist: Andrew Richardson
// SourceType: Book and Code at https://www.bloomsbury.com/cw/data-driven-graphic-design/resources/chapter-2-drawing-with-numbers/
// Date: 2016
// Description: Code Section at ch2_a Simple Drawing Functions in book

function setup(){
	// Simple Drawing Functions.

	// set the size of display window.
	createCanvas(600, 600); 

	// draw a circle at x:150, y:300
	ellipse (150, 300, 120, 120);

	// draw a square at x:240, y:240
	rect (240, 240, 120, 120);

	// connect 3 points (x1, y1, x2, y2, x3, y3) to draw a triangle
	triangle (450, 220, 380, 360, 520, 360);
}
//
function keyTyped(){
  if (key == 's' || key == 'S') save('img-ddgd-sketch-ch2_a_DrawingFunctions.jpg')
}
