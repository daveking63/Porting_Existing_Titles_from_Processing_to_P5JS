// Source: Data-Driven Graphic Design: Creative Coding for Visual Communication
// Artist: Andrew Richardson
// SourceType: Book and Code at https://www.bloomsbury.com/cw/data-driven-graphic-design/resources/chapter-3-growth-form/
// Date: 2016
// Description: Code Section at ch3_b Inertia and Damping in book

// Damping / Slowing down movement.

// set up the variables.
var xpos = 10;        // starting x location 
var targetX = 560;    // target x location to aim for
var damping = 0.05;    // amount of deceleration - the smaller the number the slower the object moves

function setup( ){ 
	createCanvas (600, 600);
	background (255); 
	fill (125, 100); // grey fill with alpha value 
	stroke (0, 100);  // black outline with alpha value
}

function draw( ){ 
	// find the distance between the object and its target.
	var distanceFromTarget = targetX - xpos;

	// create a value which is a fraction of the total distance from target
	var moveAmount = distanceFromTarget * damping; 

	// move the xpos a fraction of the distance to its target. 
	xpos = xpos + moveAmount; 

	// draw the circle. 
	ellipse (xpos, 300, 60, 60);

	// as the circle nears its target the distance to target gets less and less 
	// the circle therefore moves slower and slower. 

}
//
function keyTyped(){
  if (key == 's' || key == 'S') save('img-ddgd-sketch-ch3_b_InertiaAndDamping.jpg')
}
