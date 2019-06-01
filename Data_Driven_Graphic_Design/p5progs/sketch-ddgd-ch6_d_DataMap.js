// Source: Data-Driven Graphic Design: Creative Coding for Visual Communication
// Artist: Andrew Richardson
// SourceType: Book and Code at https://www.bloomsbury.com/cw/data-driven-graphic-design/resources/chapter-6-large-live-external-data/
// Date: 2016
// Description: Code Section at ch6_d Import Data Map in book

let table;

function preload() {
	table = loadTable('data/maplocations.tsv');
}

// Data Map 
// Map locations are stored in an external tab-separated (tsv) data file. ('maplocations.tsv').
// Get the data from the external data file and plot data values onto the screen.

function setup ( ) { 
	createCanvas (650, 450);
	background (255);

	// get one row from the data and output values
	row1 = table.getRow(0); // get 1st row
	let  xpos = row1.getNum(0); // gets the 1st item in the row
	let  ypos = row1.getNum(1); // gets the 2nd item in the row
	print("co-ordinates = " + xpos + ", " + ypos);


	// Get all the locations from the data and plot values on screen
	for (let i=0; i<table.getRowCount(); i++) { 
		let row = table.getRow (i); // get current row
		let x = row.getNum(0);  // find first location 
		let y = row.getNum(1);  // find second location

		// draw circle at location 
		fill (255, 0, 125);
		stroke(255, 0, 125, 50);
		ellipse (x, y, 5, 5);

		// connect this row item with the previous row ite, 
		if (i>0) { 
			let  prevRow = table.getRow(i-1); // get previous row
			let x2 = prevRow.getNum(0); // get previous row x and y values
			let y2 = prevRow.getNum(1); 
			line (x, y, x2, y2); // connect current and previous items
		}
	}
}
//
function keyTyped(){
  if (key == 's' || key == 'S') save('img-ddgd-sketch-ch6_d_DataMap.jpg')
}
