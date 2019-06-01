// Source: Data-Driven Graphic Design: Creative Coding for Visual Communication
// Artist: Andrew Richardson
// SourceType: Book and Code at https://www.bloomsbury.com/cw/data-driven-graphic-design/resources/chapter-4-dynamic-typography/
// Date: 2016
// Description: Code Section at cch4_e Animating Text in book

// Similar to splitting strings 
// this example re-draws the word within the draw( ) function 
// each time the word is drawn, new random x and y values are used 

var pFont; 
var xloc = 20.0;  // the starting x location  
var message = "animated letters"; // the string of characters to be animated

function preload(){
	pFont = loadFont("data/Adobe-Caslon-Pro-Semibold-Italic.ttf");
}

function setup( ){ 
	createCanvas(600, 600); 
	background (255); 
	textFont(pFont, 80); // select a font.
} 

function draw( ){ 
	background (255);
	fill (50);

	// cycle through string of letters
	for (var i=0; i<message.length; i++) { 
		var letter=message[i]; 
		var xOffset = random (-2, 2); // generate a random x and y offset amount
		var yOffset = random (-8, 8);
		text (letter, xloc+xOffset, 300+yOffset); // draw letter with random x y offset  
		xloc += textWidth (letter); // set the x position of the next letter
	}
	xloc = 20; // reset the x location before redrawing the whole word again
}
//
function keyTyped(){
  if (key == 's' || key == 'S') save('img-ddgd-sketch-ch4_e_AnimatingText.jpg')
}
