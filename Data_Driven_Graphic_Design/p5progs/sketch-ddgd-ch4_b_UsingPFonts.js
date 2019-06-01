// Source: Data-Driven Graphic Design: Creative Coding for Visual Communication
// Artist: Andrew Richardson
// SourceType: Book and Code at https://www.bloomsbury.com/cw/data-driven-graphic-design/resources/chapter-4-dynamic-typography/
// Date: 2016
// Description: Code Section at ch4_b Using PFonts in book

// Using PFont to select the font to display. 
// Fonts must be located in the sketch's "data" directory to load successfully

// Create a font object
let pFont1, pFont2, pFont3

// Preload fonts stored in 'data' folder
function preload() {
	pFont1 = loadFont("data/Adobe-Caslon-Pro-Semibold-Italic.ttf");
	pFont2 = loadFont("data/American-Typewriter-Regular.ttf");
	pFont3 = loadFont("data/Avenir-Medium.ttf");
}

function setup(){
	createCanvas(700, 600); 
	background(255); 
	fill(25);

	textFont (pFont1, 50); // select font and size
	text ("Carson Pro", 50, 150); //draw text on canvas
	 
	textFont (pFont2, 80); // select and draw again
	text ("Typewriter", 50, 300); 

	textFont (pFont2, 80); // select and draw again
	text ("Avenir Medium", 50, 450); 
}
//
function keyTyped(){
  if (key == 's' || key == 'S') save('img-ddgd-sketch-ch4_b_UsingPFonts.jpg')
}
