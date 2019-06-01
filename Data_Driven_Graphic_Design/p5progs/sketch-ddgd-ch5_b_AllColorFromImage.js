// Source: Data-Driven Graphic Design: Creative Coding for Visual Communication
// Artist: Andrew Richardson
// SourceType: Book and Code at https://www.bloomsbury.com/cw/data-driven-graphic-design/resources/chapter-4-dynamic-typography/
// Date: 2016
// Description: Code Section at ch5_b All Color From Image in book

// redrawing a static image

// in the previous example - one pixel color was found from an image and retrieved 
// in this example all the pixels are cycled through,
// the colour for each pixel is found and used to draw a circle. 
// this example re-draws all the pixels from an image as colored circles
// creating a 'mosaic' effect

let img;
let spacing = 6.0; // space between squares
let size = 5.0; // size of circles

function preload(){
	img = loadImage("data/durhamSquareSMALL.jpg"); //
}

function setup( ) { 
	createCanvas(600, 600);
	background(255);
	noStroke(); 

	// cycle through ALL pixels in the image
	// the 'nested' for loop cycles through the image a row at a time.
	for(let y=0; y<img.height; y++) { 
		for(let x=0; x<img.width; x++) {		
			let c = img.get(x, y); // get the color of current pixel 
			fill(c); // use color for fill 
			ellipse(x*spacing, y*spacing, size, size); // draw a circle
		}
	}
}

//
function keyTyped(){
  if (key == 's' || key == 'S') save('img-ddgd-sketch-ch5_b_AllColorFromImage.jpg')
}
