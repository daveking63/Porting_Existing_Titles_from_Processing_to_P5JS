// Source: Data-Driven Graphic Design: Creative Coding for Visual Communication
// Artist: Andrew Richardson
// SourceType: Book and Code at https://www.bloomsbury.com/cw/data-driven-graphic-design/resources/chapter-4-dynamic-typography/
// Date: 2016
// Description: Code Section at ch5_f Input Video Pixel Brightness in book

// use p5.js video library to capture video from a connected camera 
// needs a camera to be connected and the p5.dom.js library which contains
// capture functions

// A live video image is captured
// the pixel information is found and used to re-draw the video feed based on
// the brightness of each pixel's color
// Note: This works but the p5.js version is unbelievably slow

let capture;
let spacing = 5;
let size = 4;

function setup(){
	createCanvas(640, 480);
	capture = createCapture(VIDEO); // capture width x capture height
	capture.size(160, 120);
	capture.hide();
	noStroke( );
	fill(0);
	}

function draw(){
	background (255);
	capture.loadPixels();
	for (let y = 0; y < capture.height; y++) { 
		for (let x = 0; x < capture.width; x++) {

			// get the color of the current pixel;  use as the current fill color
			// this version uses the pixel array rather then the 'get' function
			// which is even slower

			let indx = (y * capture.width + x) * 4;
			const r = capture.pixels[indx]
			const g = capture.pixels[indx + 1];
			const b = capture.pixels[indx + 2];

			// draw a circle using the pixel color
			fill(r,g,b);

			// draw a circle using the pixel color and 
			//brightness to set the size of each circle
			c = color(r, g, b);
			let brightValue = brightness(c);
			brightValue = map(brightValue, 0, 255, 8, 0.1);
      		ellipse (x*spacing, y*spacing, brightValue, brightValue); 
		}
	}
}
//
function keyTyped(){
  if (key == 's' || key == 'S') save('img-ddgd-sketch-ch5_f_VideoBrightness.jpg')
}
