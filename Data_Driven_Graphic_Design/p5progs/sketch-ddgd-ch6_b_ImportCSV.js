// Source: Data-Driven Graphic Design: Creative Coding for Visual Communication
// Artist: Andrew Richardson
// SourceType: Book and Code at https://www.bloomsbury.com/cw/data-driven-graphic-design/resources/chapter-6-large-live-external-data/
// Date: 2016
// Description: Code Section at ch6_b Import CVS Data in book

// Comma Separated Values (CSV) data can be imported into p5.js
// Loading Comma Separated Values (CSV) data will create a one single long line of data: 
// Using the split( ) function the data can be split into individual values. 

// Load the data as a single string.

var loadedData = [];

//loadStrings loads an array of strings. 
//If there is only one string or line in a file then it is located in stringName[0].


function preload(){
	loadedData = loadStrings("data/weather_data.txt");
	console.log(loadedData); // outputs single list of data
}

function setup(){
	// Split the string into an array of individual values.
	// This results in a list of strings
	var dataAsStrings = split(loadedData[0], ',');

	// Convert the data into number values which are more useful 
	// (note that the string "1" is not the same as the number 1). 
	var dataAsNumbers = int(dataAsStrings);

	console.log(dataAsNumbers); //outputs array of numbers
}
//
function keyTyped(){
  if (key == 's' || key == 'S') save('img-ddgd-sketch-ch6_b_ImportCSV.jpg')
}
