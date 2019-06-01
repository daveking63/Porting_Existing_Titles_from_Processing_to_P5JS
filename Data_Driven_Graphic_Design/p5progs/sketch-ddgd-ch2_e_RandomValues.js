// Source: Data-Driven Graphic Design: Creative Coding for Visual Communication
// Artist: Andrew Richardson
// SourceType: Book and Code at https://www.bloomsbury.com/cw/data-driven-graphic-design/resources/chapter-2-drawing-with-numbers/
// Date: 2016
// Description: Code Section at ch2_e Random Values in book

// Random Values
// random number values can be created and applied to visual elements in the display 
// such as size, location and colour of shapes.

function setup(){
	createCanvas(600, 600);
	background (255);

	// the following for loop is repeated 500 times and creates 500 circles. 
	// each circle is given a random x, y location 
	// each circle is given a random width and a random color.

	// each time the code is run a new set of random circles are generated.

	for (var i=0; i<500; i++) { 
		// select random numbers for x and y: 
		var x= random (600); 
		var y= random (600);

		// select a random number between 2 and 60 to be used as the width 
		var w = random (2, 60); 

		// select 3 random numbers for red, green and blue
		var r  = random (255); 
		var g  = random (255); 
		var b  = random (255); 
		// create a colour using the randomly selected values: 
		var c = color(r, g, b); 

		// use the color as the fill colour
		fill (c);
		// draw a circle
		ellipse (x, y, w, w);

		// repeat. 
	}
}
//
function keyTyped(){
  if (key == 's' || key == 'S') save('img-ddgd-sketch-ch2_e_RandomValues.jpg')
}
