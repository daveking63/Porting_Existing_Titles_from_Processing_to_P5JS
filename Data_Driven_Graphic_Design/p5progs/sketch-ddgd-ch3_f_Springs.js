// Source: Data-Driven Graphic Design: Creative Coding for Visual Communication
// Artist: Andrew Richardson
// SourceType: Book and Code at https://www.bloomsbury.com/cw/data-driven-graphic-design/resources/chapter-3-growth-form/
// Date: 2016
// Description: Code Section at ch3_f Springs in book

// Springs and Elastics
// An example of a spring force being applied to an object.

// create starting variables
var stiffness = 0.1; // a constant value
var damping = 0.9;// a constant value to dampen the force
var targetX = 150.0; // location to 'spring' towards
var xpos = 0.0;
var speed = 0.0;
var distance;
var spring_force;
var pCount = 0;

function setup( ){
	createCanvas(300, 300); 
	smooth( ); 
	background (125);
}


function draw( ){
	background (125);
  
	// calculate spring force: using the calculation: 
	// spring force = stiffness * distance stretched;
	
	distance = float(targetX - xpos);
	spring_force = float(stiffness * distance);

	// add force to speed
	speed = float(speed + spring_force);

	// apply damping
	speed = float(speed * damping);

	// update the location of object.
	xpos = float(xpos + speed);
	ellipse (xpos, 50, 20, 20);
}
//
function keyTyped(){
  if (key == 's' || key == 'S') save('img-ddgd-sketch-ch3_f_Springs.jpg')
}
