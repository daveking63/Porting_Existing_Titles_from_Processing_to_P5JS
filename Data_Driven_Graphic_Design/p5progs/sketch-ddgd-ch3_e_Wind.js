// Source: Data-Driven Graphic Design: Creative Coding for Visual Communication
// Artist: Andrew Richardson
// SourceType: Book and Code at https://www.bloomsbury.com/cw/data-driven-graphic-design/resources/chapter-3-growth-form/
// Date: 2016
// Description: Code Section at ch3_e Wind in book

// Gravity and Bounce Affected by Wind

// a simulation of a gravitional force on an object
// 'gravity' value is used to affect the speed of the object as it falls.

// 'bounce' is added by reversing the speed when the object reaches the foot of the display window
// a 'wind' value is added to affect the x movement of the object 

// set up variables:
var gravity = 0.8;   // a set 'gravity' value
var speed = 0;       // speed:  starts at 0 but increases with gravity
var ypos = 60;       // the starting y-location of the ball.  

// variables to allow the x location to move.
var wind = 1.6; 
var xpos = 10;

function setup( ){ 
  createCanvas(600, 600);
  background (255);
  fill (125, 100);
  stroke (0, 100);
} 

function draw( ) { 
	// use gravity to gradually increase the speed.
	speed = speed + gravity; 

	// update the y location of the object 
	ypos = ypos + speed; 

	// add 'wind' (move from left to right).
	xpos = xpos + wind;

	// draw the ball
	ellipse(xpos, ypos, 60, 60);


	// if ypos reaches the edge of the window
	// reverse the speed and dampen it a little
	if (ypos>height) { 
		speed = speed * -0.95;
	}
}
//
function keyTyped(){
  if (key == 's' || key == 'S') save('img-ddgd-sketch-ch3_e_Wind.jpg')
}
