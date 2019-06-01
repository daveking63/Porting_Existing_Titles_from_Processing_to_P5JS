// Source: Data-Driven Graphic Design: Creative Coding for Visual Communication
// Artist: Andrew Richardson
// SourceType: Book and Code at https://www.bloomsbury.com/cw/data-driven-graphic-design/resources/chapter-4-dynamic-typography/
// Date: 2016
// Description: Code Section at ch4_g Load Text as Data in book

// Text data is loaded from an external .txt file located in the sketch's 'data' folder.
// This text can be printed or searched.
// This is a modified version -- original printed every line of with there are more than 12K.
// This version only prints lines containing the word love (which was part of the original).

var lines = []; // an array to hold the text.
var ypos = 10.0;
var loveCnt = 0;

// load text data from external file into an array.
// each line will be an item in the array
function preload(){
	lines = loadStrings("data/wutheringHeights.txt")
}

function setup( ) {
	createCanvas(400, 800);
	background(255);
	fill(20); 
	textSize(10);
	console.log("there are this many lines: " + lines.length); // how many lines

	// display every line of text containing word love
	for(var i=0; i<lines.length; i++) { 
		let lineOfText = str(i) + ' ' + lines[i]; // get text
		if(lines[i].indexOf(" love ") >=0) { 
			text(lineOfText, 10, ypos); //display on screen
			ypos += 12; // increase line spacing
			loveCnt++;
		}
	}
	console.log("number of lines with 'love' " + loveCnt);
} 
//
function keyTyped(){
  if (key == 's' || key == 'S') save('img-ddgd-sketch-ch4_g_LoadTextAsData.jpg')
}
