// Source: Data-Driven Graphic Design: Creative Coding for Visual Communication
// Artist: Andrew Richardson
// SourceType: Book and Code at https://www.bloomsbury.com/cw/data-driven-graphic-design/resources/chapter-6-large-live-external-data/
// Date: 2016
// Description: Code Section at ch6_c Import Table Data in book

// load an example TSV (called 'data.tsv') from the 'data' folder
// Look at the external data file(in 'data' folder) to see what is being extracted.

let table;

function preload() {
	table = loadTable('data/data.tsv', 'tsv', 'header');
}

function setup(){
	// get the first row from the table: 
	let row0 = table.getRow(1); 
	for (let c = 0; c < table.getColumnCount(); c++) {
    	print(row0.getString(c));
  	}

	//get data from each column in row 1 and output it
	let name0 = row0.getString(0); // columm 1 (name)
	let age0 = row0.getNum(1);  // column 2 (age)
	let gender0 = row0.getString(2);  // column 3 (gender)
	console.log("row 1 data = " + name0 + " " + age0 + " " + gender0);

	// get the items by referencing row and column location in the table and output them
	let name1 = table.getString(2, 0); //
	let age1 = table.getNum(2, 1);
	let gender1 = table.getString(2, 2);
	console.log("row 2 data = " + name1 + " " + age1 + " "  + gender1);

}
//
function keyTyped(){
  if (key == 's' || key == 'S') save('img-ddgd-sketch-ch6_c_ImportTable.jpg')
}
