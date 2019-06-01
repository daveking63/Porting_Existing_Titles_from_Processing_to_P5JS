// Source: Data-Driven Graphic Design: Creative Coding for Visual Communication
// Artist: Andrew Richardson
// SourceType: Book and Code at https://www.bloomsbury.com/cw/data-driven-graphic-design/resources/chapter-2-drawing-with-numbers/
// Date: 2016
// Description: Code Section at ch2_b Adding color in book

function setup(){
	// Adding Color:

	createCanvas(600, 600); 

	// background() is used to set the color of the window
	// greyscale values go from 0 (black) to 255 (white)

	background (220); // light grey fill 

	// RGB colour is created using 3 numbers representing 'red' 'green' and 'blue'.
	// fill ( ) sets the current fill color
	// stroke ( ) sets the current stroke (outline color). 

	// RGB values can be found using Tools > Color Selector from the menu
	strokeWeight (5); // set the width of the outline stroke

	fill (13, 184, 216); //blue fill color
	stroke (12, 83, 232);  //dark blue outline
	ellipse (150, 300, 120, 120);

	fill (214, 104, 13); // change fill to orange
	stroke (0); // change outline to black 
	rect (240, 240, 120, 120);

	// Adding a 4th number to the RGB fill is used to alter the alpha value.
	fill (39, 149, 6, 50); // green fill, with 50% alpha
	stroke (222, 16, 16); // red outline
	triangle (450, 220, 380, 360, 520, 360);
}
//
function keyTyped(){
  if (key == 's' || key == 'S') save('img-ddgd-sketch-ch2_b_AddingColor.jpg')
}
