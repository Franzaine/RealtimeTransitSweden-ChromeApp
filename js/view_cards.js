function addCardFunction () {
	
	$("#debugtext").text("cards added");
	
	var departureArray = getDeparturesFromServer(devicePosition(), searchbarContent(), userDepartureValue());
	
	for (i = 0; i<departureArray.length; i++){
		
        $("#cardContainer").append('<div style="background-color:white; margin:10px; float:left;" class="' + i.toString() + '"> <div class="departureCard"> <table ><tr><td class="cardColor" style="background-color:' + departureArray[i][1] + '; width:5px; min-width:5px;"></td><td><img class="cardType" src="assets/images/card_traffic_' + departureArray[i][0] + '.png" style="margin:3px"></td><td><table style="margin-right:10px"><tr><td class="cardTime"><img class="cardRealtime" src="assets/images/icon_realtime_' + departureArray[i][3] + '.png" style="height:1em; margin-right:5px; white-space: nowrap; overflow:hidden; text-overflow:ellipsis;">' + departureArray[i][2] + '</td></tr><tr><td class="cardStation" style="white-space: nowrap;  overflow:hidden; text-overflow:ellipsis;">' + departureArray[i][4] + '</td></tr><tr><td class="cardDirection" style="white-space: nowrap;  overflow:hidden; text-overflow:ellipsis;">' + departureArray[i][5] + '</td></tr></table></td><td style="vertical-align:initial;"> <img class="deleteCardButton" src="assets/images/button_delete.png" style="height:1.2em;"> </td></tr></table> </div> <div class="removedView" > <table style="background-color: gray;" ><tr><td><img src="assets/images/card_guide_shortcut.png" style="margin:3px"></td> <td>Departure deleted. Regret?</td></tr></table></div> </div>')
				
	}
		
	}
	
	function removeCardFunction(cardId){
	
		$("#debugtext").text("card removestate changed " + cardId);
	
		$(cardId).parent().find(".removedView").toggleClass("deleted");
		
		$(cardId).toggleClass("deleted");
		
	}
	
	function regretCardRemovalFunction(regretButton) {
	
		$("#debugtext").text("regretCardRemovalFunction");
		
		$(regretButton).toggleClass("deleted");
		
		$(regretButton).parent().find(".departureCard").toggleClass("deleted");
		
		$(regretButton).parent().find(".deleteCardButton").removeClass("removedCard");
		
	}
	
	function cardPressedFunction (pressedId) {
		
		$("#debugtext").text("cardPressedFunction");
		
		toggleVisibilityFunction ();

		var cardNumber = $(pressedId).parent().attr("class");
		
		$("#debugtext").text(cardNumber);
		
		getDepartureInformationFunction (cardNumber);
			
		/*
		$(".departureTime").text($( this ).find( ".cardTime" ).text());
		
		$(".departureStation").text($( this ).find( ".cardStation" ).text());
		
		$(".departureDirection").text($( this ).find( ".cardDirection" ).text());
		
		$(".departureColor").css({
			background:($( this ).find ( ".cardColor" ).css( "background-color" ))
		});
		
		$(".departureType").attr(
			'src', ($( this ).find ( ".cardType" ).attr( "src" ))
		);
		
		$(".departureRealtime").attr(
			'src', ($( this ).find ( ".cardRealtime" ).attr( "src" ))
		);*/
		
	}