// Source: Data-Driven Graphic Design: Creative Coding for Visual Communication
// Artist: Andrew Richardson
// SourceType: Book and Code at https://www.bloomsbury.com/cw/data-driven-graphic-design/resources/chapter-3-growth-form/
// Date: 2016
// Description: Code Section at ch3_a Sine Wave in book

// sine wave example.
// a sine wave is a mathematical curve with a flowing motion

// set up the variables 
// starting location and size of the circle: 
var xpos = 0; 
var ypos = 200;
var w = 30;

// variables for the sine wave
var angle = 0; // starting value
var magnitude = 100; // maximum height of the wave
var angle_inc = 1.5; // amount to increase angle by

//
function setup( ) { 
	createCanvas (600, 600); 
	smooth ( );
	background (255);
} 

function draw( ) { 
	// use the sine formula to 'bounce' the vertical ypos (between -100 and 100)
	ypos =  sin (radians (angle))*magnitude ; 
	ypos += 300; // add 300 to the ypos (to position within the screen space).

	// increase xpos -  move the circle horizonally
	xpos = xpos + 2;
	angle += angle_inc; 

	// gradually increase circle size
	w += 0.3;

	// draw the circle.
	fill (125);
	ellipse (xpos, ypos, w, w);

} 
//
function keyTyped(){
  if (key == 's' || key == 'S') save('img-ddgd-sketch-ch3_a_SineWave.jpg')
}
