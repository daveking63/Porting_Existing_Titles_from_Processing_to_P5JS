// Source: Data-Driven Graphic Design: Creative Coding for Visual Communication
// Artist: Andrew Richardson
// SourceType: Book and Code at https://www.bloomsbury.com/cw/data-driven-graphic-design/resources/chapter-4-dynamic-typography/
// Date: 2016
// Description: Code Section at ch5_c Extract Color Data in book

// In this example the brighness is extracted from the color information is found for each pixel 
// and mapped to the size of each colored circle. 
// The darkest areas are drawn as the largest

let spacing = 6.0; // space between squares
let img;

function preload() {
	img = loadImage('data/durhamSquareSMALL.jpg');
}

function setup() {
	createCanvas(600, 600);
	background (255);
	noStroke(); 


  // cycle through ALL pixels in the image
  // the 'nested' for loop cycles through the image a row at a time.
  for (let y=0; y<img.height; y++) { 
    for (let x=0; x<img.width; x++) {

      // get the color and brightness(0 to 255) of current pixel 
      let c = img.get(x, y); 
      let brightValue = brightness(c); 
      // use map() to convert the brightness value to a number between 0.1 and 10.
      // where high brightness produces the lowest numbers.
      // this number will be used to set the size of each circle.
      let size = map (brightValue, 0, 255, 10, 0.1); // convert 0-255 to 10-0.1
      fill (c); // use color of the pixel as the fill color 
      
      // draw a circle - using the size value as defined by the brightness of the color.
      ellipse (x*spacing, y*spacing, size, size);
    }
  }
}
//
function keyTyped(){
  if (key == 's' || key == 'S') save('img-ddgd-sketch-ch5_c_ExtractColorData.jpg')
}
