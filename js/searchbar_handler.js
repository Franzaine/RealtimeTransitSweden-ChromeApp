function searchbarContent() {

	var searchbarContentVar = $('#searchbar').val();
	
	console.log("Search bar content requested, returned: " + searchbarContentVar);
	
	return searchbarContentVar;
	
}

function searchbarContentValidation() {

	if ($('#searchbar').val().length >= 2) {
		
		console.log("search bar content validated");
		
		addCardFunction();
		
	}
	
}