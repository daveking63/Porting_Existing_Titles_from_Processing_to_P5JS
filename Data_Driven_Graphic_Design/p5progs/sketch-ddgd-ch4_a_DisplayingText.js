// Source: Data-Driven Graphic Design: Creative Coding for Visual Communication
// Artist: Andrew Richardson
// SourceType: Book and Code at https://www.bloomsbury.com/cw/data-driven-graphic-design/resources/chapter-4-dynamic-typography/
// Date: 2016
// Description: Code Section at ch4_a Displaying Text in book

// Displaying text on screen - using a default font.
function setup(){
	createCanvas(300, 300); 
	background (255); 

	// set the fill color for the text.
	fill(25); 

	// set the pixel size of the text.
	textSize(50); 

	// the text( ) function sets the words to display and their x,y location
	text("Hello World", 10, 150);
}
//
function keyTyped(){
  if (key == 's' || key == 'S') save('img-ddgd-sketch-ch4_a_DisplayingText.jpg')
}
