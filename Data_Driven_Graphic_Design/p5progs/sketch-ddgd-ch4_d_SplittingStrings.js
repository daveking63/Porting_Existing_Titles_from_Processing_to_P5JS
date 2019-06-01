// Source: Data-Driven Graphic Design: Creative Coding for Visual Communication
// Artist: Andrew Richardson
// SourceType: Book and Code at https://www.bloomsbury.com/cw/data-driven-graphic-design/resources/chapter-4-dynamic-typography/
// Date: 2016
// Description: Code Section at cch4_d Splitting Strings in book

// Splitting strings 
// This example uses the charAt ( ) function to find each individual letter in a string 
// Each letter is individually drawn at a random size and with a random greyscale value.

var xloc = 20.0;  // the x location of the first letter.
var pFont;

function preload(){
	pFont = loadFont("data/Adobe-Caslon-Pro-Semibold-Italic.ttf"); 
}

function setup(){
	createCanvas(600, 600); 
	background (255);
	
	textFont(pFont, 60); // load and select the font.

	var message = "random letters";

	console.log(message[0]); // gets the first character in the string ('r'); 
	console.log(message[1]); // gets the second character in the string ('a'); 
	console.log(message[2]); // gets the third character in the string ('n'); 
	console.log ("total number of characters = " + message.length); //length of message

	// A 'for' loop can be used to get each cycle through the string & get each character in turn 
	// Each letter can be individually displayed at a random size and color:
	for (var i=0; i < message.length; i++) { 
		var letter=message[i]; // get the current letter
		fill (random (200)); // select a random fill colour
		textSize(random (40, 150)); // select a random text size
		text(letter, xloc, 300); // display the letter 
		xloc += textWidth(letter); // set the next x position for the next letter
	} 
}
//
function keyTyped(){
  if (key == 's' || key == 'S') save('img-ddgd-sketch-ch4_d_SplittingStrings.jpg')
}
