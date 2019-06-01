// Source: Data-Driven Graphic Design: Creative Coding for Visual Communication
// Artist: Andrew Richardson
// SourceType: Book and Code at https://www.bloomsbury.com/cw/data-driven-graphic-design/resources/chapter-3-growth-form/
// Date: 2016
// Description: Code Section at ch3_h OOP Example in book

// Example Object-Orientated Programming (OOP)
// create two instances of the Circle class.
var c1;
var c2;

function setup( ){ 
	createCanvas(600, 600);
	background(255);

	// create 2 new instances of the circle: 
	// each with their own x, y, gravity, wind and size attributes
	c1 = new Circle (10, 10, 0.5, 2.2, 20); // small ball 
	c2 = new Circle (20, 13, 0.95, 0.6, 80); // large ball
} 

function draw( ){ 
	background(255);
	fill(0, 80); 
	// call the runMe() function for each circle:
	c1.updateSpeedAndLocation();
	c2.updateSpeedAndLocation();
	c1.drawShape();
	c2.drawShape();
}

// The Circle class is a 'template' from which lots of circles can be created 
// each instance of the circle will have the same functions 
// but each can have its own x, y, gravity, size and speed attributes.

class Circle { 
    // the constructor function is called when an instance is created
	// it is used to set the variable values of the instance.
	constructor(x, y, g, w, s) {
	this.xpos = float(x); 
	this.ypos= float(y); 
	this.gravity = float(g); 
	this.wind = float(w); 
	this.size = float(s);
	this.speed = 0.0;
	}

	updateSpeedAndLocation( ) {   // update the speed and location of the object. 
		this.speed = this.speed + this.gravity; // add gravity to speed
		this.ypos = this.ypos + this.speed; // update the y location of the object
		this.xpos += this.wind; // add wind force to x position
		if (this.ypos>height) { 
			this.speed = this.speed * -0.95; // add bounce. 
		}
	}

	drawShape( ) {   // draw the shape:
		ellipse(this.xpos, this.ypos, this.size, this.size);
	}
}
//
function keyTyped(){
  if (key == 's' || key == 'S') save('img-ddgd-sketch-ch3_h_OOPExample.jpg')
}
