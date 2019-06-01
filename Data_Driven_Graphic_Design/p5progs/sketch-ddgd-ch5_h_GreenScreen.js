// Source: Data-Driven Graphic Design: Creative Coding for Visual Communication
// Artist: Andrew Richardson
// SourceType: Book and Code at https://www.bloomsbury.com/cw/data-driven-graphic-design/resources/chapter-4-dynamic-typography/
// Date: 2016
// Description: Code Section at ch5_h Green screen in book

// Green pixels are not drawn - and so leave spaces to reveal the background image 
// This example is best tested with a green piece of paper.

// use p5.js video library to capture video from a connected camera 
// needs a camera to be connected and the p5.dom.js library which contains
// capture functions

let sky;
let capture;
let spacing = 5;
let dotSize = 3;
let tolerance = 200; // set tolerance level to define the range of green than will be included 

function preload(){
	sky = loadImage("data/clouds.jpg");
}

function setup(){
	createCanvas(960,720);
	capture = createCapture(VIDEO); // capture width x capture height
	capture.size(320, 240);
	capture.hide();
	noStroke( );
	fill(0);
}

function draw(){
	background (255);
	image(sky, 0, 0);
	
	let chromaKey = color(0, 255, 0); // Green
	let chromaR = red(chromaKey);
	let chromaG = green(chromaKey);
	let chromaB = blue(chromaKey);
	
	capture.loadPixels();
	for (let y = 0; y < capture.height; y++) { 
		for (let x = 0; x < capture.width; x++) {

			// get the color of the current pixel;  use as the current fill color
			// this version uses the pixel array rather then the 'get' function
			// which is even slower

			let indx = (y * capture.width + x) * 4;
			let r = float(capture.pixels[indx]);
			let g = float(capture.pixels[indx + 1]);
			let b = float(capture.pixels[indx + 2]);
      		let a = float(capture.pixels[indx + 3]);

			fill(r,g,b);

			// compare current color with green chroma
			let colorDiff = float(dist(r, g, b, chromaR, chromaG, chromaB));

			// if there is a large distance - then the colors are not similar. 
      		// if colorDiff is small - then the colors are similar. 
      
			// only draw pixels which are not similar to the key color.
			if (colorDiff > tolerance) { 
				rect (x*dotSize, y*dotSize, dotSize, dotSize);
			}
		}
	}
}
//
function keyTyped(){
  if (key == 's' || key == 'S') save('img-ddgd-sketch-ch5_h_GreenScreen.jpg')
}
