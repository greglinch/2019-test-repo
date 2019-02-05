$(document).ready(function() {
	// define our variables

	// specific name (e.g. from a form)
	var name = "Chris";
	// valid names
	var validNames = ["Sarah", "Solomon", "Cory"]

	// getting the name id on the page
	var nameElement = $("#name");

	// check if the submitted name is valid
	if (nameElement.html() in validNames) {
		// updating the name element on the page
		nameElement.html(name);
		// let the user know
		alert("Congrats, " + name + "! You're on the list!");
	} else {
	// or it's invalid
		// let the user know
		alert("Sorry, " + name + " , you're not on the list.")
	}

});