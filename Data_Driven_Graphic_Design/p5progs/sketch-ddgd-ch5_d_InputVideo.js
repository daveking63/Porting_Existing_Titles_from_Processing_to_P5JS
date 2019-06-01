// Source: Data-Driven Graphic Design: Creative Coding for Visual Communication
// Artist: Andrew Richardson
// SourceType: Book and Code at https://www.bloomsbury.com/cw/data-driven-graphic-design/resources/chapter-4-dynamic-typography/
// Date: 2016
// Description: Code Section at ch5_d Input Video in book

// use p5.js video library to capture video from a connected camera 
// needs a camera to be connected and the p5.dom.js library which contains
// capture functions

let capture;

function setup() {
	createCanvas(400, 300);
	capture = createCapture(VIDEO);
	capture.size(320,240);
}

function draw(){
  image(capture, 0, 0);
}
//
function keyTyped(){
  if (key == 's' || key == 'S') save('img-ddgd-sketch-ch5_d_InputVideo.jpg')
}
