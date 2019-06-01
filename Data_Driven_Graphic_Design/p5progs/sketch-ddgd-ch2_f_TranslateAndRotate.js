// Source: Data-Driven Graphic Design: Creative Coding for Visual Communication
// Artist: Andrew Richardson
// SourceType: Book and Code at https://www.bloomsbury.com/cw/data-driven-graphic-design/resources/chapter-2-drawing-with-numbers/
// Date: 2016
// Description: Code Section at ch2_f Translate and Rotate in book

// Translate and Rotate 

// All the rectangles are drawn at 0, 0
// Translate is used to move the co-ordinate grid - and reposition the 0, 0 point on the screen 
// This has the effect of shifting and rotating the shapes. 
// Using translation is like moving and rotating a grid of graph paper before drawing.

function setup(){
	createCanvas(300, 300); 
	background (255);

	// draw a rectangle at 0, 0: no translation
	fill (200);
	rect (0, 0, 60, 60);

	// translate the co-ordinate grid and redraw the rectangle (under translation)
	push( );
		translate (80, 80);
		fill (140);
		rect (0, 0, 60, 60);
	pop( );

	// push and pop re-set the co-ordinate grid 
	// so we can perform another translation before rotating and drawing the rectangle
	push( );
		translate (160, 160); // translate co-ordinates
		rotate (radians (45)); // rotate co-ordinate grid.
		fill (100);
		rect (0, 0, 60, 60); 
	pop ( );
}
//
function keyTyped(){
  if (key == 's' || key == 'S') save('img-ddgd-sketch-ch2_f_TranslateAndRotate.jpg')
}
