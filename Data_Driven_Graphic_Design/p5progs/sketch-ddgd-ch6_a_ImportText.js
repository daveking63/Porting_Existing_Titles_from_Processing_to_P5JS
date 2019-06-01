// Source: Data-Driven Graphic Design: Creative Coding for Visual Communication
// Artist: Andrew Richardson
// SourceType: Book and Code at https://www.bloomsbury.com/cw/data-driven-graphic-design/resources/chapter-6-large-live-external-data/
// Date: 2016
// Description: Code Section at ch6_a Import Text in book

// A example of loading text from an external document 
// The document 'daffodils.txt' is located in the data folder and. 
// is loaded into an array of strings (called 'lines')

var lines = []; 

function preload(){
	lines = loadStrings("data/daffodils.txt"); 
}

function setup(){
	// use a for loop to get each item in the 'lines' array and print to console 
	for (var i=0; i<lines.length; i++) { 
		console.log(lines[i]); // print list item.
}
}
//
function keyTyped(){
  if (key == 's' || key == 'S') save('img-ddgd-sketch-ch6_a_ImportText.jpg')
}
