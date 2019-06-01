// Source: Data-Driven Graphic Design: Creative Coding for Visual Communication
// Artist: Andrew Richardson
// SourceType: Book and Code at https://www.bloomsbury.com/cw/data-driven-graphic-design/resources/chapter-4-dynamic-typography/
// Date: 2016
// Description: Code Section at ch5_a2 Color From Image in book

// Getting a color values of specific pixels from an image. 
let img;
function preload() {
	img = loadImage('data/durham.jpg');
}

function setup(){
	createCanvas(600,600)
}

function draw( ){ 
	background(255);
	image(img, 0, 0); // display image on canvas

	let c1 = img.get(360, 120);  // find color of a specific pixel in the image - here at x=360,y=120
	fill(c1);  // set as fill color 
	rect(50, 350, 100, 100); 

	let c2 = img.get(mouseX, mouseY); // find color of specific pixel at mouse location
	fill(c2);  // use as fill
	rect(300, 350, 100, 100);
}
//
function keyTyped(){
  if (key == 's' || key == 'S') save('img-ddgd-sketch-ch5_a2_ColorFromImage.jpg')
}
