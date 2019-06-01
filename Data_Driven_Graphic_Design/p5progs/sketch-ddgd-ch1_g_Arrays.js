// Data-Driven Graphic Design
// Andrew Richardson
// ch1_g Arrayss

// p5.js has its own set of functions: 
// A full list of P5.js functions can be found at https://p5js.org/reference/


// an array is used to hold a list of items (data). 
// The following creates a list to hold 'String' data 
// The list is created with 4 spaces.
let shoppingList = [];

function setup(){
	
	// not part of original code - simply for displaying reminder
	createCanvas(400, 300);
	background(225); 
	textSize(15); 
	text("Arrays: See Console for Output", 25, 150);
	
	// Each of the 4 spaces in the shoppingList array are populated with information 
	shoppingList[0] = "apples";
	shoppingList[1] = "milk";
	shoppingList[2] = "eggs";
	shoppingList[3] = "bread";

	// individual items in an array can be found and output: 
	print(shoppingList[2]); // outputs 'eggs' 

	// the size (length) of an array can be found by using 'array.length'
	print("number of items in shopping list =  " + shoppingList.length); 

	// for loops are useful ways to cycle through an array and get each item in turn: 

	for (let i=0; i<shoppingList.length; i++) { 
		print(shoppingList[i]);  
	}
}

//
function keyTyped(){
  if (key == 's' || key == 'S') save('img-ddgd-sketch-ch1_g_Arrays.jpg')
}