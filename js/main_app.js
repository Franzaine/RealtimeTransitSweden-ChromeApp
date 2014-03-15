
$( document ).ready(function() {
	
	console.log("App started!");

	addCardFunction();
	
	$('.deleteCardButton').click(function() {
	
		//Make sure that if the deleteCardButton is clicked (together with the respective departureCard) the button gets the class removedCard
		//this is to stop the card from firing when deletebutton is pressed (the button is a part of the card)
		$(this).addClass("removedCard");
		
	});
	
	$('.departureCard').click(function() {
		
		//is it the deleteCardButton being pressed or the the rest of the departureCard?
		if($(this).find(".deleteCardButton").hasClass("removedCard")) {
			//$(removeCardFunction($(this).parents().attr("class")));
			removeCardFunction(this);
			
			console.log("Card deleted!");
			
		} else {
		
			cardPressedFunction(this);
			
			console.log("Card pressed!");
			
		}
	});
	
	$('#backbutton').click(function() {
		
		toggleVisibilityFunction();
		
		console.log("Backbutton pressed!");
		
	});
	
	$('.removedView').click(function() {
		
		regretCardRemovalFunction(this);
		
		console.log("Regretted card removal!");
		
	});
	
	$('#searchbar').bind('input', function() { 
    
		searchbarContentValidation();
		
		console.log("New searchbarinput!");
	
	});
	
});


	