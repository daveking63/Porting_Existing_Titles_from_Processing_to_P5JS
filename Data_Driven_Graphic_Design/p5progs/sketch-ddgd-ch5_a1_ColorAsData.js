// Source: Data-Driven Graphic Design: Creative Coding for Visual Communication
// Artist: Andrew Richardson
// SourceType: Book and Code at https://www.bloomsbury.com/cw/data-driven-graphic-design/resources/chapter-5-seeing-the-world/
// Date: 2016
// Description: Code Section at ch5_a1 Color As Data in book

// create color data types by setting the RGB values. 
// Use Tools > Color Selector to get the exact color values you want.

function setup(){
	
	let c1 = color(255, 0, 0); // RED
	let c2 = color(0, 0, 255); // BLUE

	// once created, the color datatype can be used to set the fill or stroke of any shape
	fill(c1);
	stroke(c2);
	rect(10, 0, 20, 99); 

	// colors can also include an Alpha value to set the color transparency (RGBA)
	let c3 = color(255, 0, 0, 50); // RED with 50% alpha 
	fill(c3);
	rect(40, 0, 20, 99);

	// colors may also be defined using hexadecimal values: 
	let c4 = '#FFCC00';
	fill(c4); 
	rect(70, 0, 20, 99);

	// see more at: https://processing.org/reference/color_datatype.html
}
//
function keyTyped(){
  if (key == 's' || key == 'S') save('img-ddgd-sketch-ch5_a1_ColorAsData.jpg')
}
