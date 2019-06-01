// Source: Data-Driven Graphic Design: Creative Coding for Visual Communication
// Artist: Andrew Richardson
// SourceType: Book and Code at https://www.bloomsbury.com/cw/data-driven-graphic-design/resources/chapter-4-dynamic-typography/
// Date: 2016
// Description: Code Section at ch4_c Text and Variables in book


// Text and Variables 

// This example shows how variable values can be used to set 
// and change the x, y position of text on the screen.

var pFont;  // create a PFont object
var xpos = 0; // create starting x position for the text.
var displayMessage = "tickertape text"; // create a message to display
	
function preload() {
	pFont = loadFont("data/Adobe-Caslon-Pro-Italic.ttf");
}

function setup( ) { 
	createCanvas(300, 300); 
	background(255); 
	textFont(pFont, 30);   // load and select the font to use
} 

function draw( ){ 
	background (255); 
	fill (25); 

	// draw text at the mouse position.
	text ("follow mouse", mouseX, mouseY);
	// draw text using the value of xpos and the string 'displayMessage'
	text (displayMessage, xpos, 150); 
	// increase xpos to move across the screen
	xpos += 2;
	// re-set if it goes off the edge of the screen
	if (xpos > width) { 
		xpos = -120;
	}
} 
//
function keyTyped(){
  if (key == 's' || key == 'S') save('img-ddgd-sketch-ch4_c_TextAndVariables.jpg')
}
