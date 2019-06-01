// Source: Data-Driven Graphic Design: Creative Coding for Visual Communication
// Artist: Andrew Richardson
// SourceType: Book and Code at https://www.bloomsbury.com/cw/data-driven-graphic-design/resources/chapter-1-designers-code/
// Date: 2016
// Description: Code Section at ch1_d If Statements in book

// Conditional Statements ('if' statements)
// conditional statements are used to make decisions.
// a common conditional statement is the 'if statement'. 

// A CONDITION is defined within the brackets. e.g ( x > 10) 
// If the condition is TRUE then the code within the block is executed. 
// Otherwise it is ignored. 

/* 
Values of variables are tested using standard comparison operators: 
 >   Greater Than 
 >=  Greater Than or Equal to 
 <   Less Than
 <=  Less Than or Equal to
 ==  Equal to.
*/

// The following are examples if statements to test the value of the variable 'age':

function setup(){
	
	// not part of original code - simply for displaying reminder
	createCanvas(400, 300);
	background(225); 
	textSize(15); 
	text("If Statements: See Console for Output", 25, 150);
	
	// Make decisions based on the value of 'age'
	var age = 45; 

	// is age greater than 40? 
	if (age > 40) { 
		console.log("you are over 40");
	}

	// is age less than 40? 
	if (age < 40) {
		console.log("you are younger than 40");
	} 

	// is age equal to 40?
	if (age == 40) { 
		console.log("you are 40 years old");
	}

	// If/Else statements allow an alternate piece of code to be processed if the condition is not met. 
	var score = 75; 

	if (score < 50) { 
		console.log("nevermind you did not manage 50 points");
	}  
	else { 
		console.log("well done you managed to score 50 or above");
	}
}
//
function keyTyped(){
  if (key == 's' || key == 'S') save('img-ddgd-sketch-ch1_d_IfStatesments.jpg')
}
