// Source: Data-Driven Graphic Design: Creative Coding for Visual Communication
// Artist: Andrew Richardson
// SourceType: Book and Code at https://www.bloomsbury.com/cw/data-driven-graphic-design/resources/chapter-4-dynamic-typography/
// Date: 2016
// Description: Code Section at ch4_f Letter Class in book

// Letter Class 
// In this example a separate 'Letter' class has been created 
// this allows each letter to have it's own attributes functions and behaviours

var pFont; 
var letters = []; // create an array to store instances of the letters
var xpos = 100; // variables for the starting x position and the text to display
var message = "bounce";

function preload(){
	pFont = loadFont("data/Adobe-Caslon-Pro-Semibold-Italic.ttf");
}

function setup(){ 
  createCanvas(600, 600); 
  textFont(pFont, 120);
   
  // Populate the array with letter instances for each letter in the message
  for (var i=0; i < message.length; i++) { 
    // create a new letter instance - set its letter ('char'), and x location 
    letters[i] = new Letter (message[i], xpos); 
    // update xpos for the next letter.
    xpos += textWidth (message[i]);
  }
}

function draw(){ 
  background (255);
  fill (50);
  
  // call the functions to move and draw each letter instance: 
  for (var i=0; i<letters.length; i++) { 
    letters[i].moveLetter();
    letters[i].drawLetter();
  }
}

class Letter { 
 
	constructor(l, x) { 
		this.letter = l; 
		this.xpos = float(x);
		this.ypos = 20.0;
		this.speed = random (1, 8);     // each letter has a random speed and gravity.
		this.gravity = random (0.1, 0.6);
	} 

 // a function to move the letter using speed and gravity 
 // 'bounce' is added when the object reaches the foot of the screen
	moveLetter() { 
		this.speed += this.gravity;
		this.ypos += this.speed;
		if (this.ypos>height) { 
			this.speed *= -0.95;
		}
	}

	// draw the letter on the screen at its x and y location
	drawLetter() { 
		text(this.letter, this.xpos, this.ypos);
	}
} 
//
function keyTyped(){
  if (key == 's' || key == 'S') save('img-ddgd-sketch-ch4_f_LetterClass.jpg')
}
