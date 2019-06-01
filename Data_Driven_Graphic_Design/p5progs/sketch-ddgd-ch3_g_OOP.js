// Source: Data-Driven Graphic Design: Creative Coding for Visual Communication
// Artist: Andrew Richardson
// SourceType: Book and Code at https://www.bloomsbury.com/cw/data-driven-graphic-design/resources/chapter-3-growth-form/
// Date: 2016
// Description: Code Section at ch3_g OOP (object oriented programming) in book

// A Class is a template from which lots of similar objects can be created 
// This is a SAMPLE of the STRUCTURE of a class - 
// Nothing will appear when run - but it is used to illustrate how a class is structured.

// The 'Car' class is defined below. 

// Once defined, instances of the class can be created
var car1; 
var car2; 

function setup ( ) { 
	// each new Car instance are given their own attributes
	car1 = new Car (160);  // car1 has 'maxSpeed' of 160 
	car2 = new Car (110);  // car2 has 'maxSpeed' of 110 

	// once instances have been created, then can use the functions of the class 
	car1.changeSpeed( );        // car1 uses the 'changeSpeed' function 
	car2.changeDirection( );    // car2 uses the 'changeDirection' function
}
// ------------------------------

// The car class is defined here: 
// a class is a combination of properites (variables) and methods (functions) 

class Car {
	// The constructor is called when an instance is created
	constructor(ms){
		// set the properties (variables) of our car class
		this.engineSize;
		this.numberOfDoors;
		this.maxSpeed = ms;
	}
	// Each class has a set of methods (functions) to define what the class does 
	changeSpeed ( ) {
		// add functions here to change speed
	}

	changeDirection ( ) {
		// add functions here to change direction
	}
}
//
function keyTyped(){
  if (key == 's' || key == 'S') save('img-ddgd-sketch-ch3_g_OOP.jpg')
}
