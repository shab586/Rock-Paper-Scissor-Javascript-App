var userOption = undefined;

function playwith(option) {
	// border selection from the user
	if(userOption != undefined){
		userSelectionElement = document.getElementById(userOption);
		userSelectionElement.style.border = "5px #f8f8f8 solid";


	}

	userOption = option;
	userSelectionElement = document.getElementById(option);
	userSelectionElement.style.border = "5px #fcb750 solid";
}

function playgame(){
	var computerOption = Math.random();
	if (computerOption < 0.34){
		computerOption = "rock";
	}else if(computerOption <= 0.67) {
		computerOption = "paper";
	}else{
		computerOption = "scissors";
	}

var resultMessage = compare(userOption, computerOption);

document.getElementById("results").innerHTML = "<p>User Selects: " + userOption + " - Computer Selects: "+ computerOption + "</p> <p>" + resultMessage + "</p>";

}

function compare(userSelection, compterSelection){
	if (userSelection == undefined){

		return "Please select an option before play";

	}
	if (userSelection == compterSelection){
		return "It's a Draw!";
	}
	if (userSelection == "rock"){
		if(compterSelection == "scissors"){
			return "You win!";
		}else{
			return "The Computer Wins. Try again.";
		}
	} else if (userSelection == "paper"){
		if(compterSelection == "rock"){
			return "You win!";
		}else if ("scissors"){
			return "Computer wins. Try again.";
		}
	} else if (userSelection == "scissors"){
		if (computerSelection == "rock"){
			return "The computer wins. Try again.";
		}else{
			return "You win!";
		}
	}
}